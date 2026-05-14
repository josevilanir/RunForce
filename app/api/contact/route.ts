import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nome inválido").max(100),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(5, "Mensagem muito curta").max(2000),
});

export async function POST(req: NextRequest) {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Dados inválidos" }, { status: 422 });
  }

  const { name, email, message } = parsed.data;

  // TODO: integrate with an email provider (e.g. Resend, SendGrid)
  // For now, log sanitized data server-side only
  console.log("[contact] New submission", { name, email: email.substring(0, 5) + "***" });

  // Placeholder — wire up email delivery here
  void name;
  void message;

  return NextResponse.json({ success: true }, { status: 200 });
}
