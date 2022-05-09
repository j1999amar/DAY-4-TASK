const getCountries = () => {
    const xmr=new XMLHttpRequest();
    xmr.open("GET","https://restcountries.com/v3.1/all");
    xmr.send();
    xmr.responseType="json";
    xmr.onload =()=>{
        const countries=xmr.response;
        let flags=countries.map((country)=>country.flags.png);
        for(var flag of flags)
        console.log(flag);
    };
};
getCountries();