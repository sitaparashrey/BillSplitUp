class data
{
    constructor(a,p)
    {
        this.amount=a;
        this.person=p;
    }
}
function calculate(props)
{
    console.log(props);
    let calc=props;
    let n=calc.length;
    
    // let calc=[40,60,80,20];
    let sum=0;
    for(let i=0;i<n;i++)
    {
        sum=sum+Number(calc[i]);
        // console.log(calc[i] + " s " + sum);
    }
    let values=[];
    sum=sum/n;
    let k=0;
    console.log(sum);
    for(let i=0;i<n;i++)
    {
        const a=new data(calc[i]-sum,k++);
        values.push(a);
    }
    // console.log(values);
    values.sort((a,b)=>{
        return a.amount - b.amount;
    });
    for(let i=0;i<n;i++)
    {
        console.log(values[i].amount + "  p  " + values[i].person);
    }
    //created 2d array
    let dp=new Array(n);
    for (var i = 0; i <dp.length; i++) 
    {
       dp[i] = new Array(calc.length);
        //   dp[i]={};
    }
    //assign value 0
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++)
        {
            dp[i][j]=0;
        }
    }
    //
    while(values.length!==0)
    {
        if(values[0].amount===0)
        {
            values.splice(0,1);
            break;
        }
        // if(values[(values.length)-1].amount===0)
        // {
        //     values.pop();
        // }
        let give=values[0].amount;
        let take=values[values.length-1].amount;
        let d=give+take;
        // console.log("Evaluating " + give +" "+take);
        if(d<0)
        {
            dp[values[0].person][values[values.length-1].person]=Math.abs(take);
            values[0].amount=d;
            values.pop();
        }else if(d>0)
        {
             dp[values[0].person][values[values.length-1].person]=Math.abs(give);
             values[values.length-1].amount=d;
             values.splice(0,1);
             
        }else
        {
            dp[values[0].person][values[values.length-1].person]=Math.abs(take);
            values.pop();
            values.splice(0,1);
        }
    }
     for(let i=0;i<n;i++)
    {
        // console.log(i);
        for(let j=0;j<n;j++)
        {
            console.log(dp[i][j]);
           if(dp[i][j]>0)
           {
               console.log(i+1 +"Gives amount " + dp[i][j] + " to " + (j+1));
           }
        }
    }
    return dp;
}
export default calculate;
