export function bookedAppointments(){
     const container = document.querySelector('.booked-appointments');
     const openButton = document.querySelector('.view-schedules');
     const closeButton = container.querySelector('i');

     openButton.addEventListener("click", ()=>{
        container.classList.add('booked-appointments-appear');
     });

     closeButton.addEventListener("click", ()=>{
        container.classList.remove('booked-appointments-appear');
     });
}