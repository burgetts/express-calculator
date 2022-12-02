/* Validators */
function validateQueryString(req){
    // Check for query string
   if (!req.query.nums){
       throw new ExpressError('Nums required', 400)
   }
}

function validateNums(req){
   // Get nums from query string
   let q = req.query.nums
   // Convert query string to array of numbers
   let nums = q.split(',').map(function(item) {
       if (!parseInt(item)){
           throw new ExpressError(`${item} is not a number`, 400)
       }
       return parseInt(item);
   })
   return nums
}

module.exports = {validateQueryString, validateNums}