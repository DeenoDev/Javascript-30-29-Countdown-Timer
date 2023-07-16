function timer(seconds){
   const now = date.now();
   const then = now + seconds * 1000;
   console.log({now, then});
}