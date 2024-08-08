const body = document.querySelector('body') as HTMLBodyElement;
export function showToast(message:string){
    const div = document.createElement('P');
    div.innerHTML = ` 
    <p class="notification">${message}</p>`;
    body.append(div);
    setTimeout(()=>{
       div.remove();
    },3000)
  }