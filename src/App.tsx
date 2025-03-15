import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { WebApp } from '@twa-dev/sdk';
import { FormInput } from './components/FormInput';
import { WorkFormData } from './types/WorkForm';
import './App.css';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WorkFormData>();

  // Инициализация Telegram WebApp
  useEffect(() => {
    WebApp.ready();
    document.body.className = WebApp.colorScheme;
  }, []);

  // Отправка данных
  const onSubmit: SubmitHandler<WorkFormData> = (data) => {
    try {
      WebApp.sendData(JSON.stringify(data));
      WebApp.close();
    } catch (error) {
      console.error('Ошибка отправки:', error);
      WebApp.showAlert('⚠️ Ошибка! Попробуйте еще раз');
    }
  };

  return (
    <div className="container">
      <h1>🏗 Учет строительных работ</h1>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label="Участок"
          name="section"
          register={register}
          error={errors.section}
          placeholder="Участок №1"
        />

        <FormInput
          label="Объект"
          name="object"
          register={register}
          error={errors.object}
          placeholder="Объект А"
        />

        <FormInput
          label="Вид работ"
          name="workType"
          register={register}
          error={errors.workType}
          placeholder="Земляные работы"
        />

        <FormInput
          label="Работа"
          name="workName"
          register={register}
          error={errors.workName}
          placeholder="Разработка грунта"
        />

        <FormInput
          label="Объем (м³)"
          name="volume"
          type="number"
          register={register}
          error={errors.volume}
          placeholder="0.00"
          min={0.01}
          max={10000}
          step="0.01"
        />

        <button type="submit" className="submit-btn">
          📤 Отправить данные
        </button>
      </form>
    </div>
  );
}
