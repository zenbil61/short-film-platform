'use client';
import './page.scss';
import SignInForm from '@/partials/Forms/SignInForm';

export default function Page({ params }) {
  const methods = {
    handleSubmit(data) {
      console.log('value', data);
    }
  };
  return (
    <div className='sign-up'>
      <div className='sign-up-logo'>
        <div className='app-logo x3'>short film</div>
      </div>
      <div className='sign-up-wrapper'>
        <SignInForm onSubmit={methods.handleSubmit} />
      </div>
    </div>
  );
}
