import type { NextPage } from 'next';
import Head from 'next/head';
import cx from 'classnames';
import { Surface, contrasts } from '../components/Surface';

const Dark = (props) => <div className="dark" {...props} />;

const buttonClasses = cx(
  'h-6 rounded border border-zinc-300 dark:border-zinc-900 w-full outline-none focus:border-blue-500 dark:focus:border-blue-500 py-1 p-2 focus:ring-2 focus:ring-blue-400/30',
  contrasts.med
);
const inputClasses = cx(
  'h-6 rounded border border-zinc-300 dark:border-zinc-900 w-full outline-none focus:border-blue-500 dark:focus:border-blue-500 py-1 p-2 focus:ring-2 focus:ring-blue-400/30',
  contrasts.med
);

const Button = (props) => (
  <button {...props} className={cx(buttonClasses, props.className)} />
);

const TextInput = (props) => (
  <input {...props} className={cx(inputClasses, props.className)} />
);

const FormControl = () => {
  return (
    <div className="grid grid-flow-col-dense gap-4 items-center">
      <div>Label</div>
      <TextInput />
    </div>
  );
};

const Section = (props) => (
  <Surface
    contrast="med"
    className="px-2 py-1 font-bold border-y border-y-black/[0.1]"
    {...props}
  />
);

const SectionBody = (props) => (
  <div className={cx('p-2', props.className)} {...props} />
);

const Example = () => {
  return (
    <Surface className="w-[300px] h-screen p-0 " contrast="high">
      <Section>Section</Section>
      <SectionBody>
        <div className="grid grid-cols-2 gap-4">
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
        </div>
      </SectionBody>
      <Section>Section</Section>
      <SectionBody>
        <div className="grid grid-cols-2 gap-4">
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
          <FormControl />
        </div>
      </SectionBody>
    </Surface>
  );
};

const Page: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Designer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex justify-center h-screen text-xs">
          <Example />
          <Dark style={{ height: '100vh' }}>
            <Example />
          </Dark>
        </div>
      </main>
    </div>
  );
};

export default Page;
