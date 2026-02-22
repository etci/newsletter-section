import Bullet from '@/components/Bullet/Bullet';
import { SubmitEventHandler, useMemo } from 'react';
import checkIcon from '@/assets/icons/check-fill.svg';
import abstract from '@/assets/images/abstract.jpg';
import Button from '@/components/Button/Button';
import styles from './Newsletter.module.css';
import EmailField from '@/components/EmailField/EmailField';
import { vldt } from '@kutayetci/vldt';
import { subscribe } from '@/api';
import { toastr } from '@/utils/toastr';

const EMAIL_FORMAT_ERROR_MESSAGE = 'Please enter a valid email address';
const EMAIL_REQUIRED_ERROR_MESSAGE = 'Email field is required';

const Newsletter = () => {
  const texts = useMemo(
    () => [
      'Exclusive access to new abstract images and collections',
      'Unlock special promotions only for subscribers',
      'Regular doses of inspiration',
    ],
    []
  );

  const emailSchema = vldt
    .string()
    .email(EMAIL_FORMAT_ERROR_MESSAGE)
    .required(EMAIL_REQUIRED_ERROR_MESSAGE);

  const onSubmit: SubmitEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const result = emailSchema.safeParse(email);
    if (result.success) {
      const response = await subscribe(result.data);
      if (response.success) {
        toastr.success(
          'Subscription successful! Please check your email to confirm.',
          3000
        );
        return;
      } else {
        toastr.error(
          'Failed to subscribe. Please ensure your email is correct or try again later.',
          3000
        );
        return;
      }
    } else {
      //   const [errorMessage] = result.errors;
    }
  };
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsletter__content}>
        <div className={styles.newsletter__info}>
          <h2 className={styles.newsletter__heading}>
            Get the finest curated abstracts delivered weekly to your inbox
          </h2>
          <Bullet
            texts={texts}
            iconPrefix={<img width={24} height={24} src={checkIcon} />}
          />
        </div>
        <form className={styles.newsletter__form} onSubmit={onSubmit}>
          <div className={styles.newsletter__fieldContainer}>
            <EmailField id="email" placeholder="Enter your email" />
            <span>We only send you the best! No spam.</span>
          </div>
          <div>
            <Button type="submit">Subscribe</Button>
          </div>
        </form>
      </div>
      <img className={styles.newsletter__image} src={abstract} alt="" />
    </section>
  );
};

export default Newsletter;
