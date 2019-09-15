This is a logic test.

Given the following 2d matrix (this is a sample input, you should consider alternative inputs):

```
[[1,1,1,1],
[0,1,1,0],
[0,1,0,1],
[0,1,9,1],
[1,1,1,1]]
```

Create a virtual robot, that can walk up, right, left and bottom. The robot cannot leave the borders.

Find the shortest path to `9`. `1` is a walkable place. `0` is a hole, and you must avoid it.

Your initial position is `0x0`, the `9` position is `2x3`.

Good luck!

---------------------------

## My solution:


1) Each distances between border corner is 1
2) each corner will save [from,distance]
3) I'll start at 0x0 with distance=0, so I randomly choose an open (1) corner
3) Save at the corner the from and sum my steps: (0x0, 1)
4) verify: Is it 9? if yes, end. Else, continue

Finally we'll have distance saved in all corners from 0x0.


For exemple:
```
[[{x,0},{0x0,1},1,1],
[0,{1x1,2},1,0],
[0,{2x1,3},0,1],
[0,{3x1,4},9,1],
[1,1,1,1]]
```