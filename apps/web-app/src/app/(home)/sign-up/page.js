import './page.scss';
import SignUpForm from '@/partials/Forms/SignUpForm';

export default async function Page({ params }) {
  return (
    <div className='sign-up'>
      <div className='sign-up-logo'>
        <div className='app-logo x3'>short film</div>
      </div>
      <div className='sign-up-wrapper'>
        <SignUpForm />
      </div>
    </div>
  );
}
