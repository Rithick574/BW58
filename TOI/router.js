const [text, setText] = useState("hello");

useEffect(() => {

   async function apicall(){
       const result = await axios.post("/")
   };
   
   apicall();
  return () => {
    setText("");
  };
}, []);


const hadler=()=>{
    setText("fcgbhbjf");
};