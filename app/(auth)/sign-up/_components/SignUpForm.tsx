'use client';

import Button from '@/components/ui/Button';
import { photoUrlCheker } from '@/helpers/photoUrlCheker';
import { axiosPost } from '@/lib/axiosPost';
import { login } from '@/redux/features/auth/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

interface SignInFormData {
  email: string;
  password: string;
  name: string;
  photoUrl: string;
}

const SignUpForm = () => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
    name: '',
    photoUrl: '',
  });
  const [isLoading, setIsloading] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();

      setIsloading(true);

      const hasPermitted = photoUrlCheker(formData.photoUrl);

      if (hasPermitted) {
        const data = await axiosPost('/api/auth/register', formData);

        if (data) {
          setIsloading(false);
          setFormData({
            email: '',
            password: '',
            name: '',
            photoUrl: '',
          });
          dispatch(login(data));
          toast.success('Register successful');
          router.push('/');
        } else {
          setIsloading(false);
        }
      } else {
        toast.error('Please past a photo url from pexels/unsplash/cloudinary');
      }
    },
    [formData, router, dispatch]
  );

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col gap-1.5'>
        <h2>Create an account</h2>
        <p className='text-black/50'>Please provide your details to register</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex w-full flex-col gap-5 text-lg'
      >
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Name
          </label>
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type='text'
            id='name'
            placeholder='john wick'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>
        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='email' className='cursor-pointer'>
            Email address
          </label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type='email'
            id='email'
            placeholder='hello@example.com'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer'>
            Password
          </label>
          <input
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type='password'
            id='password'
            placeholder='write your passrword'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <div className='flex flex-col items-start gap-1.5'>
          <label htmlFor='password' className='cursor-pointer'>
            Photo Url
          </label>
          <input
            value={formData.photoUrl}
            onChange={(e) =>
              setFormData({ ...formData, photoUrl: e.target.value })
            }
            type='text'
            id='photoUrl'
            placeholder='Paste your photo url from pexels/unsplash/cloudinary'
            className='eq w-full rounded-xl border border-gray bg-transparent px-5 py-3 outline-none focus:border-blue'
          />
        </div>

        <Button variant={'tertiary'} type='submit' isLoading={isLoading}>
          Register
        </Button>

        <p>
          <span className='text-black/50'>Already have an account? </span>
          <Link href='/sign-in' className='link-item'>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
