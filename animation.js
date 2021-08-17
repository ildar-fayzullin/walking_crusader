
function animation(obj) {
  const { clear , update ,render } = obj;
  let ptimestamp = 0 ;

  requestAnimationFrame(tick);

function tick(timestamp) {
  requestAnimationFrame(tick);
  const diff = timestamp - ptimestamp ;
  ptimestamp = timestamp;
  const fps =  1000 / diff;
  const second = diff / 1000;

    const params = {
      timestamp,
      ptimestamp ,
      diff ,
      fps,
      second
    }
  update(params);
  clear();
  render(params);
  }

}
