Name and describe the two main operations of a stack (to add and remove data).
push: propiedad q suma un valor dado al stack al final de este
remove: propiedad q elimina un valor del final del stack


Name and describe the two main operations of a queue (to add and remove data).
push: propiedad q suma un valor dado al queue al final de este
remove: propiedad q elimina un valor del principio del queue

What are the four main steps of mergesort?
function mergeSort(arr){
  if(arr.length <= 1) return arr;                    // Check if arr has more than one value
  var left = arr.slice(0, Math.floor(arr.length/2))   // Declare halts of arr
  var right = arr.slice(Math.floor(arr.length/2))       // Continue dividing the arr recursively
  var leftSorted = mergeSort(left)                     // Sort up to the same length as before
  var rightSorted = mergeSort(right)
  return merge(leftSorted, rightSorted)
}


Say you have a program which handles the login queue to a game server. The game server is able to
 log in one person every one second. Assume that one second must elapse after a person logs in with
 an empty queue before they are removed from the queue. Draw the state of the queue at 12:00:06,
 considering the following sequence of events:

At 12:00:00 Hades logs in
At 12:00:00 Ares logs in
At 12:00:00 Zeus logs in
At 12:00:00 Buzz Light Year logs in
At 12:00:02 Kanye West logs in
At 12:00:03 Taylor Swift logs in
At 12:00:03 Darkwing Duck logs in
At 12:00:04 Evil Mickey logs in.
Hades-Ares-Zeus-Buzz Light Year-Kanye West-Taylor Swift
