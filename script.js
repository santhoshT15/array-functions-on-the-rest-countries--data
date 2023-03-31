let url = new XMLHttpRequest();
url.open('GET','https://restcountries.com/v3.1/all');
url.responseType='json';

url.send();

url.onload= function(){
    var data = url.response;
    

   let asia_contries=data.filter((item)=>{
    return item.continents=='Asia';
   })
   console.log("a. all the countries from the Asia continent /region=  ");
   console.log( asia_contries.map((item)=>{
    return item.name.common;
   }))
   

   let population=data.filter((item)=>{
    return item.population < 200000; 
    })
    console.log("b. all the countries with a population of less than 2 lakhs=  ");
    console.log(population.map((item)=>{
        return item.name.common;
    }))

     console.log("c.  name, capital and flag for all the countries=  ")
    data.forEach(element => console.log(element.name.common, element.capital, element.flag));
    
    

    let total_population = data.reduce(function (item, item) {
        return  Number(item.population)+ Number(item.population);
    });
    console.log("d.the total population of countries = "+total_population);

   

    let usd=data.filter((item=>{
        return item.currencies && item.currencies.USD;
    }))
    console.log("e. the country which uses US Dollars as currency.= ");
    console.log(usd.map((item)=>{ return item.name.common;
    }));

   
}
