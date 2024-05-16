// VALIDAÇÃO DO FORMULÁRIO AGENDAMENTO
export function formsValidation(){
    const forms = document.querySelector('#forms');
    const schedulingDate = document.getElementById('datetime-input');
    const todaysDate = new Date();
    let currentMonth = todaysDate.getMonth();
    currentMonth = Number(currentMonth);
    let currentYear = todaysDate.getFullYear();
    currentYear = Number(currentYear);

    forms.addEventListener('submit', (e) => {
        let schedulingDatetime = schedulingDate.value;
        console.log(schedulingDatetime)

        // Validação do mês
        let schedulingMonth = schedulingDatetime.slice(5, 7);
        schedulingMonth = Number(schedulingMonth);
        if(schedulingMonth != (currentMonth + 1) && schedulingMonth != (currentMonth + 2)){
            e.preventDefault();
            alert('Mês inválido!');
            schedulingDate.focus();
        }
        
        // Validação do ano
        let schedulingYear = schedulingDatetime.slice(0, 4);
        schedulingYear = Number(schedulingYear);
        if(schedulingYear != currentYear){
            e.preventDefault();
            alert('Ano inválido!');
            schedulingDate.focus();
        }

        // Validação hora
        let schedulingHour = schedulingDatetime.slice(-5, -3);
        schedulingHour = Number(schedulingHour);
        if(!(schedulingHour >= 8 && schedulingHour <= 19)){
            e.preventDefault();
            alert('Horário indisponível!');
            schedulingDate.focus();
        }
    });
}
