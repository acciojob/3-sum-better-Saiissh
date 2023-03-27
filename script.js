function threeSum(arr, target) {
// write your code here

	arr.sort((a,b)=>{return a-b});
	let mindiff=10000,ans=100000;
	let n=arr.length;
	for(let i=0;i<n-2;i++)
	{
		for(let j=i+1;j<n-1;j++)
		{
			for(let k=j+1;k<n;k++)
				{
					let sum=arr[i]+arr[j]+arr[k];
					let currdiff=Math.abs(target-sum);

					if(currdiff<mindiff)
					{
						ans=sum;
						mindiff=currdiff;
					}
				}
		}
	}
	return ans;
  
}

module.exports = threeSum;
