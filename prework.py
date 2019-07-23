# Read a list of integers:
# a = [int(s) for s in input().split()]
a = [4, 3, 5, 2, 5, 1, 3, 5]
track = set()
for i, val in enumerate(a): 
  
  for val2 in a: 
    import pdb; pdb.set_trace()
    if val != val2: 
      track.add(val)
    elif val2 in track: 
      track.remove(val2)
    elif val == val2: 
      if val in track: 
        track.remove(val)
        
# Print a value:
print(list(track))
