'use server'

async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);                    
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

export async function submit(prevState: any, data: FormData) {
  'use server'

  const body = new FormData()
  body.append('content', JSON.stringify({
    'course-id': data.get('course'),
    'user-email': data.get('user'),
    'user-pass': await sha256(data.get('password') as string),
    'assignment-id': data.get('assignment'),
  }))

  const res = await (await fetch('http://lighthouse.soe.ucsc.edu/api/v03/courses/assignments/submissions/fetch/user/peek', {
    method: 'POST',
    body
  })).json()

  if (!res.success) return `Error: ${res.message}`

  if (!res.content['found-submission']) return "You haven't submitted this assignment yet!"

  return `${res.content['submission-result'].score} / ${res.content['submission-result'].max_points}`
}
