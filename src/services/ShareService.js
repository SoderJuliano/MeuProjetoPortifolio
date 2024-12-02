import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import { showAlert } from 'simple-alerts/dist/showAlert.js'

class ShareService {
    async share() {
        //! Share PDF init
        try {
            // Obtém a referência ao template
            const curriculo = document.getElementById("template");
  
            if (!curriculo) {
              throw new Error("Referência ao currículo não encontrada.");
            }
  
              // Adiciona a classe de impressão ao elemento
              curriculo.classList.add('print');
  
            // Converte o currículo em um canvas usando html2canvas
            const canvas = await html2canvas(curriculo, {
              logging: false,
              useCORS: true,
              scale: 2, // Ajuste o scale para melhor qualidade
              width: curriculo.scrollWidth,  // Captura toda a largura do conteúdo
              height: curriculo.scrollHeight, // Captura toda a altura do conteúdo
              windowWidth: curriculo.scrollWidth,  // Simula a largura da janela para capturar todo o conteúdo
              windowHeight: curriculo.scrollHeight, // Simula a altura da janela
            });
  
            // Obtém o conteúdo do canvas como uma imagem em formato JPEG
            const imgData = canvas.toDataURL("image/jpeg");
  
            // Cria o PDF usando a imagem capturada
            const pdfBlob = await this.createPdfFromImage(imgData);
  
            // Verifica se o dispositivo suporta compartilhamento
            if (navigator.share) {
              const file = new File([pdfBlob], "curriculo.pdf", { type: "application/pdf" });
  
              await navigator.share({
                title: "Compartilhar Currículo",
                text: "Veja o meu currículo!",
                files: [file],
              });
  
              console.log("Compartilhamento bem-sucedido");
            } else {
              console.warn("Compartilhamento não suportado neste dispositivo. Abrindo cliente de e-mail...");
              showAlert("Compartilhamento não possível, iremos baixar o pdf para seu dispositivo");
              this.downloadPdf(pdfBlob);
              return;
            }
          } catch (error) {
            console.error("Erro ao gerar o PDF:", error);
          }
    }

    htmlToCanvas(element) {
        return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        // Define o tamanho do canvas com base no elemento
        const rect = element.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Renderiza o conteúdo como imagem simples
        context.fillStyle = "#fff"; // Fundo branco
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = "16px Arial"; // Estilo de texto básico
        context.fillStyle = "#000"; // Cor do texto

        Array.from(element.children).forEach((child, index) => {
            context.fillText(child.innerText, 10, (index + 1) * 20);
        });

        resolve(canvas);
        });
    }

  async createPdfFromImage(imgData) {
    return new Promise((resolve) => {
      const pdf = new jsPDF('p', 'pt', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position -= pdfHeight; // Subtrair para mover a posição para cima
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      resolve(pdf.output('blob'));
    });
  }

  downloadPdf(pdfBlob) {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    const formattedTime = `${date.getHours().toString().padStart(2, "0")}-${date.getMinutes()
      .toString()
      .padStart(2, "0")}`;
    const fileName = `cv-${formattedDate}-${formattedTime}.pdf`;

    const url = URL.createObjectURL(pdfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

//   openEmailClient(fileName) {
//     const email = "seuemail@exemplo.com";
//     const subject = "Meu Currículo";
//     const body = `Segue em anexo meu currículo (${fileName}). Por favor, revise! Seu arquivo está na sua pasta de downloads.`;

//     const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//     // Abrir cliente de email
//     window.location.href = mailtoLink;
//   }
}

export default new ShareService();