async function generatePDF() {
    // Import the jsPDF module
    const { jsPDF } = window.jspdf;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const doc = new jsPDF();

    doc.text(`Nome: ${name}`, 10, 10);
    doc.text(`Email: ${email}`, 10, 20);

    doc.setFontSize(20);
    doc.setTextColor(0, 0, 255); 
    doc.text('Relatório de Dados do Formulário', 20, 20);

    doc.save('teste.pdf');
}