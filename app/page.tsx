'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submit } from './submit'

export default function Home() {
  const [state, formAction] = useFormState(submit, '')

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Lighthouse
          </h1>
          <form action={formAction}>
            <div className="field">
              <label className="label">User</label>
              <div className="control">
                <input className="input" type="email" autoComplete="email" name="user" placeholder="sslug@ucsc.edu" required />
              </div>
            </div>
            <div className="field">
              <label className="label">Autograder Password</label>
              <div className="control">
                <input className="input" type="password" autoComplete="current-email" name="password" required />
              </div>
            </div>
            <div className="field">
              <label className="label">Course</label>
              <div className="control">
                <input className="input" type="text" placeholder="CSE40" name="course" required />
              </div>
            </div>
            <div className="field">
              <label className="label">Assignment</label>
              <div className="control">
                <input className="input" type="text" placeholder="HO0" name="assignment" required />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <SubmitButton />
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="section">
        <div className="container title is-1">
          {state}
        </div>
      </section>
    </main>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className={`button is-link ${pending ? 'is-loading' : ''}`}>
      Get Score
    </button>
  )
}
