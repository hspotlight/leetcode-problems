export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const isFinish = enterCourse(numCourses, prerequisites) === numCourses;
    return isFinish;
};

export function enterCourse(numCourses: number, prerequisites: number[][]): number {
    const courseDep = getCourseDep(numCourses, prerequisites);

    let count = 0
    const done: boolean[] = [];
    done.length = numCourses
    done.fill(false)

    const doableTasks = courseDep.map((course, index) => {
        return course.count === 0 ? index : -1
    }).filter(id => id !== -1)

    while (doableTasks.length > 0) {
        const task = doableTasks.shift() ?? -1;
        if (!done[task]) {
            done[task] = true;
            count++;
            courseDep[task].dependedBy.forEach((newTask: number) => {
                courseDep[newTask].count--;
                if (courseDep[newTask].count === 0) {
                    doableTasks.push(newTask)
                }
            })
        }
    }
    return count;
}

type CourseDep = {
    count: number;
    dependedBy: number[];
};

function getCourseDep(numCourses: number, prerequisites: number[][]) {
    const courseDep: CourseDep[] = []
    for (let i = 0; i < numCourses; i++) {
        courseDep[i] = {
            count: 0,
            dependedBy: []
        }
    }
    for (let i = 0; i < prerequisites.length; i++) {
        const [course, dependency] = prerequisites[i];
        courseDep[dependency].dependedBy.push(course);
        courseDep[course].count++;
    }
    return courseDep
}
