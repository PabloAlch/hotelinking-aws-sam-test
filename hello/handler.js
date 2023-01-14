exports.sayHello = async (event) => {
  
  console.log(event);
  const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false });

  const name = event.queryStringParameters?.name || 'User!';
  const body = { message: `Hello ${name}!, the time is ${currentDate}`};


  return {
    statusCode:200,
    body: JSON.stringify(body),
  }
}