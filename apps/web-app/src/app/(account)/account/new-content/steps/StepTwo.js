import { Row, Col } from '@/ui/grid';
import { Input, FormItem, Select, Radio, Checkbox } from '@/ui/form';
import { getErrorMessage } from '@/common/formik.helper';
import {
  MOCK_CATEGORIES,
  MOCK_YEARS,
  MOCK_CONTENT_TYPES
} from '@/common/mock_data';
const StepTwo = ({ formik }) => {
  return (
    <>
      <FormItem title='İçerik Türü'>
        <Radio.Group>
          <Radio
            name='type'
            description='Film'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={1}
          />
          <Radio
            name='type'
            description='Belgesel'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={2}
          />
          <Radio
            name='type'
            description='Dizi'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={3}
          />
        </Radio.Group>
      </FormItem>

      <FormItem title='İçerik Adı' infoText="Filmizin gözükeceği ve aramalarda bulunacağı isim">
        <Input
          type='text'
          name='name'
          title='İçerik Adı'
          errorMessage={getErrorMessage(formik, 'name')}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </FormItem>

      <FormItem title='İçerik Adı' infoText="Filmizin görünecek kısa bir özeti">
        <Input
          type='textarea'
          name='description'
          title='İçerik Açıklaması'
          errorMessage={getErrorMessage(formik, 'description')}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </FormItem>
      <Row gap={15}>
        <Col md={12}>
          <FormItem.Title> Yıl </FormItem.Title>
          <Select
            formik={formik}
            instanceId='year'
            name="year"
            aria-activedescendant='xxxxsss'
            options={MOCK_YEARS}
          />
          <br />
          <br />
        </Col>
        <Col md={12}>
          <FormItem.Title> Yaş </FormItem.Title>
          <Select
            instanceId='content-type'
            name="contentType"
            formik={formik}
            aria-activedescendant='ankara'
            options={MOCK_CONTENT_TYPES}
          />
          <br />
          <br />
        </Col>
      </Row>
      <FormItem title='Kategoriler'>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
          }}
        >
          {MOCK_CATEGORIES.map((item) => {
            return (
              <div key={item.id} style={{ flex: '1 1 25%', maxWidth: '25%' }}>
                <Checkbox
                  type='checkbox'
                  name='categories'
                  title='Gizlimi'
                  description={item.displayName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={item.id}
                />
              </div>
            );
          })}
        </div>
      </FormItem>
    </>
  );
};

export default StepTwo;
