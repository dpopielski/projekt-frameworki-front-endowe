const GetApiPath = ({dataType}: {dataType: string}) => { return `https://jsonplaceholder.typicode.com/${dataType}`; } 

export default GetApiPath;