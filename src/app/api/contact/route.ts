import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || '247671387';
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID || '1f7906a3-bbbb-46fc-90c1-191b93b82985';
const HUBSPOT_REGION = process.env.HUBSPOT_REGION || 'na2';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Split name into firstname and lastname
    const nameParts = name.trim().split(/\s+/);
    const firstname = nameParts[0] || '';
    const lastname = nameParts.slice(1).join(' ') || '';

    // Construct structured message body including the selected inquiry type
    const fullMessage = inquiryType
      ? `[Project Focus: ${inquiryType}]\n\n${message}`
      : message;

    // HubSpot Forms Submissions API v3 payload
    const payload = {
      fields: [
        { objectTypeId: '0-1', name: 'email', value: email },
        { objectTypeId: '0-1', name: 'firstname', value: firstname },
        ...(lastname ? [{ objectTypeId: '0-1', name: 'lastname', value: lastname }] : []),
        ...(company ? [{ objectTypeId: '0-1', name: 'company', value: company }] : []),
        { objectTypeId: '0-1', name: 'message', value: fullMessage },
      ],
      context: {
        pageUri: req.headers.get('referer') || 'https://alishbaqadir.com/contact',
        pageName: 'Alishba Qadir Portfolio Contact',
      },
    };

    const endpoint = `https://api-${HUBSPOT_REGION}.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('HubSpot submission error:', res.status, errorText);
      return NextResponse.json(
        { error: 'Failed to submit form to CRM' },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Error submitting to HubSpot:', err);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
