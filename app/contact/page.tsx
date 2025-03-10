'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guests: string;
  date: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // TODO: Implement form submission
  };

  return (
    <div className="min-h-screen py-20 bg-beige">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="section-title text-center">Contact & Devis</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-playfair text-olive mb-6">Nos Coordonnées</h2>
              
              <div className="space-y-4">
                <p>
                  <strong>Adresse :</strong><br />
                  123 Avenue de la Provence<br />
                  13100 Aix-en-Provence
                </p>
                
                <p>
                  <strong>Téléphone :</strong><br />
                  04 91 00 00 00
                </p>
                
                <p>
                  <strong>Email :</strong><br />
                  contact@cigale-restauration.fr
                </p>
                
                <p>
                  <strong>Horaires :</strong><br />
                  Lundi - Vendredi : 9h - 18h<br />
                  Samedi : Sur rendez-vous
                </p>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-playfair text-olive mb-6">Demande de Devis</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50"
                  />
                  {errors.name && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50"
                  />
                  {errors.email && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                  <input
                    type="tel"
                    {...register("phone", { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50"
                  />
                  {errors.phone && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Type d'événement</label>
                  <select
                    {...register("eventType", { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="mariage">Mariage</option>
                    <option value="anniversaire">Anniversaire</option>
                    <option value="entreprise">Événement d'entreprise</option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.eventType && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre d'invités</label>
                  <input
                    type="number"
                    {...register("guests", { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50"
                  />
                  {errors.guests && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Date souhaitée</label>
                  <input
                    type="date"
                    {...register("date", { required: true })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50"
                  />
                  {errors.date && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-olive focus:ring focus:ring-olive focus:ring-opacity-50"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer la demande
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}