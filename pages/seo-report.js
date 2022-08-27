import Script from "next/script";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import styled from "styled-components";
import Flex from "../components/atoms/Flex";

const SeoFormWrapper = styled.div`
      color: red;
  
`

export default function SeoPage() {
  const divRef = useRef();
  const [firstUpdate, setFirstUpdate] = useState(true);
  useEffect(() => {
    /*
    const htmlString = `
      <script>
        var embedConfig = {
          embedCode: '6cba125319972d37ee7f31d98265628ebb4fe501',
          orientation: 'landscape',
          frameStyle: {
            border: '5px',
            width: '1000px',
            height: '660px',
            color: 'red'
          }
        }
      </script>
      <script src="//app.optimizedmarketing.co/javascripts/embed_report_card.js"></script>`;

     */
    const htmlString2 = `
    <script>
  embedConfig = {
    embedCode: '6cba125319972d37ee7f31d98265628ebb4fe501',
    output: true,
    orientation: 'landscape',
    frameStyle: {
      border: '0px',
      width: '100%',
      height: '660px',
      color: "white"
    }
  }
</script>
<script src="//app.optimizedmarketing.co/javascripts/embed_report_card.js"></script>
    `
    const fragment = document.createRange().createContextualFragment(htmlString2);
    divRef.current.append(fragment);

    console.log("componentDidUpdateFunction");

  }, []);

  useLayoutEffect(() => {
    let frame = document.getElementsByTagName('iframe')[0];
//    let doc = frame.contentDocument;
  }, [])

  useEffect(() => {
    if(!firstUpdate) {
      const el = document.getElementById('col_form')?.classList.add("text-green")
      console.log(el)
    }
  }, [firstUpdate])

  return (
    <Flex className="justify-center w-full flex-wrap bg-white">
      <div className="prose mx-8 text-green-300" ref={divRef} />
    </Flex>
  )
}