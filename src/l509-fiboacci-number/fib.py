import unittest

def fib(n): # -> int:
    if n == 0 or n == 1:
        return n
    return fib(n - 2) + fib(n - 1)

class TestFib(unittest.TestCase):

    def test_n_0(self):
        self.assertEqual(fib(0), 0)
        
    def test_n_1(self):
        self.assertEqual(fib(1), 1)

    def test_n_2(self):
        self.assertEqual(fib(2), 1)

    def test_n_3(self):
        self.assertEqual(fib(3), 2)

    def test_n_4(self):
        self.assertEqual(fib(4), 3)

    def test_n_5(self):
        self.assertEqual(fib(5), 5)
        
    def test_n_6(self):
        self.assertEqual(fib(6), 8)

if __name__ == '__main__':
    unittest.main()