import numpy as np

def random_3x3():
  return np.random.randn(3, 3).tolist()

if __name__ == '__main__':
  print(random_3x3())