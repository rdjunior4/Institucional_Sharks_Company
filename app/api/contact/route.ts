import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa o Resend com a chave de API das variáveis de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, whatsapp, empresa, segmento, faturamento } = body;

    // Validação básica
    if (!nome || !whatsapp || !empresa) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando.' },
        { status: 400 }
      );
    }

    // Email de destino (quem vai receber o contato)
    const sendTo = process.env.CONTACT_EMAIL || 'contato@sharkscompany.online'; 

    const { data, error } = await resend.emails.send({
      // O e-mail de envio deve ser um domínio verificado no Resend (ex: contato@sharkscompany.online)
      // Enquanto estiver em teste (sem domínio verificado), use onboarding@resend.dev e envie APENAS para o e-mail cadastrado na conta do Resend
      from: 'Sharks Company <onboarding@resend.dev>', 
      to: [sendTo], 
      subject: `Novo Lead: ${nome} - ${empresa}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0b2545;">Novo Lead Capturado - Sharks Company</h2>
          <p>Você recebeu uma nova solicitação de diagnóstico/contato pelo site institucional.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Nome:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${nome}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>WhatsApp:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${whatsapp}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Empresa:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Segmento:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${segmento || 'Não informado'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Faturamento:</strong></td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${faturamento || 'Não informado'}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #777;">Enviado através do formulário do site sharkscompany.online</p>
        </div>
      `,
    });

    if (error) {
      console.error("Erro no envio do Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro interno no servidor:", error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
