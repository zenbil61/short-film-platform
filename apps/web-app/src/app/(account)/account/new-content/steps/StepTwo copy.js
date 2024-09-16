import { Row, Col } from '@/ui/grid';
import Checkbox from '@/ui/form/Checkbox';
import Radio from '@/ui/form/Radio';
import Select from '@/ui/form/Select';
import FormItem from '@/ui/form/FormItem';
import { getErrorMessage } from '@/common/formik.helper';
import {
  MOCK_CATEGORIES,
  MOCK_YEARS,
  MOCK_CONTENT_TYPES
} from '@/common/mock_data';
const StepTwo = ({ formik }) => {
  return (
    <>
      <FormItem>
        <Input.RadioGroup>
          <Input
            type='radio'
            name='type'
            description='Film'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.type}
          />
          <Input
            type='radio'
            name='type'
            description='Belgesel'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.type}
          />
          <Input
            type='radio'
            name='type'
            disabled={true}
            description='Dizi'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.type}
          />
        </Input.RadioGroup>
      </FormItem>

      <Input.Title>İçerik Adı</Input.Title>
      <Input
        type='text'
        name='name'
        title='İçerik Adı'
        errorMessage={getErrorMessage(formik, 'name')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Input.Title>İçerik Açıklaması</Input.Title>
      <Input
        type='textarea'
        name='description'
        title='İçerik Açıklaması'
        errorMessage={getErrorMessage(formik, 'description')}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <Row gap={15}>
        <Col md={12}>
          <Input.Title>Çıkış Yılı</Input.Title>
          <Select
            instanceId='year'
            aria-activedescendant='xxxxsss'
            options={MOCK_YEARS}
          />
        </Col>
        <Col md={12}>
          <Input.Title>İçerik Kısıtı</Input.Title>
          <Select
            instanceId='content-type'
            aria-activedescendant='ankara'
            options={MOCK_CONTENT_TYPES}
          />
        </Col>
      </Row>
      <Input.Title>Gizli İçerik</Input.Title>
      <Input
        type='checkbox'
        name='isPrivate'
        title='Gizlimi'
        description='İçerik Sadece Benim Tarafımdan Görünsün'
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.isPrivate}
      />

      <Input.Title> Kategoriler </Input.Title>
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
              <Input
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
    </>
  );
};

export default StepTwo;
