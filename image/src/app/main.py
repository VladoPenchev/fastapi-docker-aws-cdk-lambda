import numpy as np
import os

IS_USING_IMAGE_RUNTIME = bool(os.environ.get('IS_USING_IMAGE_RUNTIME', False))

def random_3x3():
  return {'array':np.random.randn(3, 3).tolist(), 'from_image':IS_USING_IMAGE_RUNTIME}

if __name__ == '__main__':
  print(random_3x3())