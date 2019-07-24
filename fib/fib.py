def fib_finder(n): 

  if n < 2:

    return n
    
  return fib_finder(n - 1) + fib_finder(n - 2)  