const Countries = () => {
    const xmr=new XMLHttpRequest();
    xmr.open("GET","https://restcountries.com/v3.1/all");
    xmr.send();
    xmr.responseType="json";
    xmr.onload =()=>{
        const countries=xmr.response;
        for(var i in countries){
            console.log("Name : "+countries[i].name.common,
            "Region : "+countries[i].region,
            "SubRegion : "+countries[i].subregion,
            "Population : "+countries[i].population
            );
        }
    };
};
Countries();