export async function subscribe(
  email: string
): Promise<{ success: string | undefined; error: string | undefined }> {
  const response = await fetch(
    'https://www.greatfrontend.com/api/projects/challenges/newsletter',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    }
  );

  if (response.ok) {
    const body = await response.json();
    return { success: body.message, error: body.error };
  }
  throw new Error('Unexpected error occurred');
}
