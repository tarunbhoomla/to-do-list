//jshint esversion:6

exports.getDate = function (){
    let today = new Date() ;
    const options = {weekday:"long", day:"numeric" , month:"long"} ;
     
    return today.toLocaleDateString("hi-IN" , options) ;
} ;


module.exports.getDay = getDay ;
function getDay()
{
    let today = new Date() ;
    const options = {weekday:"long"} ;
    return today.toLocaleDateString("en-US",options) ;
}

