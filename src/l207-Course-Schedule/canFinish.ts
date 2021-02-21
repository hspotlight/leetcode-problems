export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const isFinish = enterCourse(numCourses, prerequisites) === numCourses;
    return isFinish;
};

export function enterCourse(numCourses: number, prerequisites: number[][]): number {
    let count = 0
    const depCount: number[] = [];
    const done: boolean[] = [];
    const depMap = Object.assign({})
    for (let i = 0; i < numCourses; i++) {
        depCount[i] = 0
        depMap[i] = []
        done[i] = false
    }
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, dep] = prerequisites[i]
        depMap[dep].push(course);
        depCount[course]++;
    }

    const doableTasks = []
    for (let i = 0; i < numCourses; i++) {
        if (depCount[i] === 0) {
            doableTasks.push(i);
        }
    }

    while (doableTasks.length > 0) {
        const task = doableTasks.shift() ?? -1;
        if (!done[task]) {
            done[task] = true;
            count++;
            depMap[task].forEach((newTask: number) => {
                depCount[newTask]--;
                if (depCount[newTask] === 0) {
                    doableTasks.push(newTask)
                }
            })
        }
    }
    return count;
}