let s1 = document.getElementById("sri-form");
const s2 = () => {
  let s3 = localStorage.getItem("sri-ent");
  if(s3){
    s3 = JSON.parse(s3);
  }else{
    s3 = [];
  }
  return s3;
};

let s4 = s2();
const s5 = () =>{
  const s6 = s2();
  const s7 = s6.map((entry) => {

      const namesri = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailsri = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordsri = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobsri = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermssri = `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
      const rowsri = `<tr>${namesri} ${emailsri} ${passwordsri} ${dobsri} ${acceptTermssri}</tr>`;
      return rowsri;
    }).join("\n");
    const table = `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${s7} </table>`;
    let details = document.getElementById("sri-ent");
    details.innerHTML = table;
}
const s8 = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptedTermsAndConditions = document.getElementById("acceptTerms").checked;
  const entry = {
      name,
      email,
      password,
      dob,
      acceptedTermsAndConditions,
  };
  s4.push(entry);
  localStorage.setItem("sri-ent", JSON.stringify(s4));
  s5();
}
s1.addEventListener("submit", s8);
s5();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------


        function ganval3() 
        {   let element = document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let sri1 = new Date(dob);
            var todaydate = new Date();
            var age = parseInt(todaydate.getFullYear()) - parseInt(sri1.getFullYear());
            if (todaydate.getMonth() < sri1.getMonth() || (todaydate.getMonth() === sri1.getMonth() && todaydate.getDate() < sri1.getDate()))
              age--;
            if (!(age > 18 && age < 55)) 
            {
                element.setCustomValidity("entered age must be in between 18 and 55");
                element.reportValidity();
            } 
            else{
            element.setCustomValidity("");
            }
        }