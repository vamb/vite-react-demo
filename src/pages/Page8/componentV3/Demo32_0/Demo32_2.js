import React from 'react';
import styled from "styled-components";
import UnitContent from "../../../components/UnitContent";
import { Topic, RootTopic, Relationship, Summary, Marker, Workbook } from 'xmind-generator'
import { Button } from "antd";

const Demo32_2 = () => {

  const generate = async () => {
    const workbook = Workbook(
      RootTopic('Grill House')
        .children([
          Topic('Salad')
            .markers([Marker.Arrow.refresh])
            .children([
              Topic('Garden Salad').ref('topic:baz').labels(['Lemon Vinaigrette', 'Ginger Dressing']),
              Topic('Tomato Salad').ref('topic:qux')
            ])
            .summaries([Summary('Get 10% off', { from: 'topic:baz', to: 'topic:qux' })]),
          Topic('Starters')
            .ref('topic:bar')
            .note('With free soft drink')
            .children([
              Topic('Smoked Bacon').ref('topic:fred'),
              Topic('Fried Chicken').ref('topic:thud').labels(['Hot Chilli'])
            ])
        ])
        .relationships([
          Relationship('', { from: 'Salad', to: 'topic:bar' }),
          Relationship('Special', { from: 'topic:fred', to: 'topic:thud' })
        ])
        .summaries([Summary('Fresh and Delicious', { from: 'Salad', to: 'topic:bar' })])
    )
    workbook.archive().then(buf=>{
      const blob = new Blob([buf]);
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a');
      a.href = url;
      a.download = 'a.xmind'
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
  }

  return (
    <UnitContent title={'32_2 下载通过代码生成的xmind文件'}>
      <Wrapper>
        <Button type={'primary'} onClick={async ()=>await generate()}>下载xmind</Button>
      </Wrapper>
    </UnitContent>
  )
}

const Wrapper = styled('div')`

`

export default Demo32_2
