import Head from 'next/head';

const formFields = [
  {
    key: 'newsletter',
    label: 'News & Updates',
  },
  {
    key: 'sale',
    label: 'Sales & Promotions',
  },
  {
    key: 'newsletter',
    label: '',
  },
]

const Settings = () => {
  return (
    <>
      <Head>
        <title>Communication Settings | Twin Silver</title>
      </Head>
      <div className="my-0 mx-4">
        <h1 className="header-largest">Email Settings</h1>
        <h2 className="header-larger">Select which of our communications you&rsquo;d like to receive:</h2>
        <form>
          <div className={'flex'}>
            <input type='checkbox'/>
            <label>Newsletters</label>
          </div>
          <div className={'flex'}>
            <button className={'button'}>Select All</button>
            <button className={'button'}>Unselect All</button>
            <button className={'button'}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Settings