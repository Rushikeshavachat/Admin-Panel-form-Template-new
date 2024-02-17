import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { firestore } from '../../libs/firebase';

const DeletePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const deleteData = async () => {
      try {
        // await firestore.collection('data').doc(id as string).delete();
   
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    };

    if (id) {
      deleteData();
    }
  }, [id, router]);

  return (
    <div className="container mx-auto mt-8">
      <p className="text-lg font-bold">Deleting...</p>
    </div>
  );
};

export default DeletePage;

