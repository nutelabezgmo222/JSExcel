import './module';
import "./scss/index.scss";

function func() {
  return new Promise(res => {
    res(1234321)
  })
}

func().then((result) => {
  console.log(result);
})
