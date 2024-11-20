// script.js
const scheduleForm = document.getElementById("scheduleForm");
const scheduleTable = document.getElementById("scheduleTable").getElementsByTagName('tbody')[0];

scheduleForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener datos del formulario
  const subject = document.getElementById("subject").value.trim();
  const day = document.getElementById("day").value;
  const time = document.getElementById("time").value;

  if (!subject || !day || !time) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Crear una nueva fila para la tabla de horario
  const newRow = scheduleTable.insertRow();
  const subjectCell = newRow.insertCell(0);
  const dayCell = newRow.insertCell(1);
  const timeCell = newRow.insertCell(2);
  const actionCell = newRow.insertCell(3);

  // Rellenar la fila con los datos de la clase
  subjectCell.textContent = subject;
  dayCell.textContent = day;
  timeCell.textContent = time;

  // Crear un botón para eliminar la clase
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", function () {
    if (confirm(`¿Estás seguro de eliminar la clase de ${subject}?`)) {
      scheduleTable.deleteRow(newRow.rowIndex - 1);
    }
  });
  actionCell.appendChild(deleteButton);

  // Limpiar el formulario
  scheduleForm.reset();
});
