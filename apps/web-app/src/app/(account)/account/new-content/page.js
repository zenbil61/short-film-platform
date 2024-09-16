import Container from '@/ui/container';

import NewContentForm from '@/app/(account)/account/new-content/NewContentForm';
export default async function Page({ params }) {
  return (
    <div className='page'>
      <h1 className='page-title'> Yeni İçerik </h1>
      <p className='page-description'>Yeni Film / Dizi / Belgesel Ekleyin</p>
      <div className='page-content form-content'>
        <NewContentForm />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
