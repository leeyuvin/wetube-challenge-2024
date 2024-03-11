import express from "express";
import morgan from "morgan"; //이름이 같을 필요는 없다. from만 정확하면 된다.
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const PORT = 4000;

console.log(process.cwd());

//express라는 어플리케이션 생성 코드
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
//app.locals.basedir = process.cwd();
app.use(logger);
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

// app.get("/", logger, handleHome); //button.addEventListener("click", clickBtn)과 같다.

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);