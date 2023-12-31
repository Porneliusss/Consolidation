PGDMP     1    	                 |            Consolidation    15.3    15.3 g    |           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            }           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ~           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    18982    Consolidation    DATABASE     �   CREATE DATABASE "Consolidation" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Consolidation";
                postgres    false            �            1259    19111    advice    TABLE     c  CREATE TABLE public.advice (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "sureName" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    body character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.advice;
       public         heap    postgres    false            �            1259    19110    advice_id_seq    SEQUENCE     �   CREATE SEQUENCE public.advice_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.advice_id_seq;
       public          postgres    false    235            �           0    0    advice_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.advice_id_seq OWNED BY public.advice.id;
          public          postgres    false    234            �            1259    19010    cars    TABLE     G  CREATE TABLE public.cars (
    id integer NOT NULL,
    "startPlace" character varying(255),
    number integer,
    "endPlace" character varying(255),
    "trunkVolume" numeric NOT NULL,
    status character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.cars;
       public         heap    postgres    false            �            1259    19009    cars_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.cars_id_seq;
       public          postgres    false    219            �           0    0    cars_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;
          public          postgres    false    218            �            1259    19059 
   categories    TABLE     �   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    19058    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    227            �           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    226            �            1259    19050    consolidations    TABLE     ,  CREATE TABLE public.consolidations (
    id integer NOT NULL,
    "endPlace" character varying(255),
    status character varying(255) NOT NULL,
    "startDate" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.consolidations;
       public         heap    postgres    false            �            1259    19049    consolidations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.consolidations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.consolidations_id_seq;
       public          postgres    false    225            �           0    0    consolidations_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.consolidations_id_seq OWNED BY public.consolidations.id;
          public          postgres    false    224            �            1259    19125    orderConsolidations    TABLE     �   CREATE TABLE public."orderConsolidations" (
    id integer NOT NULL,
    "consolidationId" integer NOT NULL,
    "orderId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 )   DROP TABLE public."orderConsolidations";
       public         heap    postgres    false            �            1259    19124    orderConsolidations_id_seq    SEQUENCE     �   CREATE SEQUENCE public."orderConsolidations_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public."orderConsolidations_id_seq";
       public          postgres    false    237            �           0    0    orderConsolidations_id_seq    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public."orderConsolidations_id_seq" OWNED BY public."orderConsolidations".id;
          public          postgres    false    236            �            1259    19092    orders    TABLE     �  CREATE TABLE public.orders (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    supply boolean,
    price integer NOT NULL,
    quantity integer NOT NULL,
    "endPlace" character varying(255) NOT NULL,
    "startDate" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "productId" integer
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    19091    orders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.orders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.orders_id_seq;
       public          postgres    false    233            �           0    0    orders_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.orders_id_seq OWNED BY public.orders.id;
          public          postgres    false    232            �            1259    19019    packageCars    TABLE     �   CREATE TABLE public."packageCars" (
    id integer NOT NULL,
    "carId" integer NOT NULL,
    "packageId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public."packageCars";
       public         heap    postgres    false            �            1259    19018    packageCars_id_seq    SEQUENCE     �   CREATE SEQUENCE public."packageCars_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."packageCars_id_seq";
       public          postgres    false    221            �           0    0    packageCars_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public."packageCars_id_seq" OWNED BY public."packageCars".id;
          public          postgres    false    220            �            1259    18996    packages    TABLE     y  CREATE TABLE public.packages (
    id integer NOT NULL,
    "startPlace" character varying(255),
    "endPlace" character varying(255),
    weight numeric NOT NULL,
    length numeric NOT NULL,
    width numeric NOT NULL,
    status integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.packages;
       public         heap    postgres    false            �            1259    18995    packages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.packages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.packages_id_seq;
       public          postgres    false    217            �           0    0    packages_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.packages_id_seq OWNED BY public.packages.id;
          public          postgres    false    216            �            1259    19073    products    TABLE     C  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "categoryId" integer,
    "providerId" integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    19072    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    231            �           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    230            �            1259    19066 	   providers    TABLE     �   CREATE TABLE public.providers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    rating integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.providers;
       public         heap    postgres    false            �            1259    19065    providers_id_seq    SEQUENCE     �   CREATE SEQUENCE public.providers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.providers_id_seq;
       public          postgres    false    229            �           0    0    providers_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.providers_id_seq OWNED BY public.providers.id;
          public          postgres    false    228            �            1259    18984    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    18983    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    214            �            1259    19038    waybills    TABLE       CREATE TABLE public.waybills (
    id integer NOT NULL,
    date timestamp with time zone NOT NULL,
    status character varying(255),
    number integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "packageCarId" integer
);
    DROP TABLE public.waybills;
       public         heap    postgres    false            �            1259    19037    waybills_id_seq    SEQUENCE     �   CREATE SEQUENCE public.waybills_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.waybills_id_seq;
       public          postgres    false    223            �           0    0    waybills_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.waybills_id_seq OWNED BY public.waybills.id;
          public          postgres    false    222            �           2604    19114 	   advice id    DEFAULT     f   ALTER TABLE ONLY public.advice ALTER COLUMN id SET DEFAULT nextval('public.advice_id_seq'::regclass);
 8   ALTER TABLE public.advice ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    234    235    235            �           2604    19013    cars id    DEFAULT     b   ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);
 6   ALTER TABLE public.cars ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    19062    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226    227            �           2604    19053    consolidations id    DEFAULT     v   ALTER TABLE ONLY public.consolidations ALTER COLUMN id SET DEFAULT nextval('public.consolidations_id_seq'::regclass);
 @   ALTER TABLE public.consolidations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224    225            �           2604    19128    orderConsolidations id    DEFAULT     �   ALTER TABLE ONLY public."orderConsolidations" ALTER COLUMN id SET DEFAULT nextval('public."orderConsolidations_id_seq"'::regclass);
 G   ALTER TABLE public."orderConsolidations" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    237    236    237            �           2604    19095 	   orders id    DEFAULT     f   ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.orders_id_seq'::regclass);
 8   ALTER TABLE public.orders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    232    233            �           2604    19022    packageCars id    DEFAULT     t   ALTER TABLE ONLY public."packageCars" ALTER COLUMN id SET DEFAULT nextval('public."packageCars_id_seq"'::regclass);
 ?   ALTER TABLE public."packageCars" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    221    221            �           2604    18999    packages id    DEFAULT     j   ALTER TABLE ONLY public.packages ALTER COLUMN id SET DEFAULT nextval('public.packages_id_seq'::regclass);
 :   ALTER TABLE public.packages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            �           2604    19076    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230    231            �           2604    19069    providers id    DEFAULT     l   ALTER TABLE ONLY public.providers ALTER COLUMN id SET DEFAULT nextval('public.providers_id_seq'::regclass);
 ;   ALTER TABLE public.providers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    229    229            �           2604    18987    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �           2604    19041    waybills id    DEFAULT     j   ALTER TABLE ONLY public.waybills ALTER COLUMN id SET DEFAULT nextval('public.waybills_id_seq'::regclass);
 :   ALTER TABLE public.waybills ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222    223            w          0    19111    advice 
   TABLE DATA           g   COPY public.advice (id, name, "sureName", email, body, "createdAt", "updatedAt", "userId") FROM stdin;
    public          postgres    false    235   �~       g          0    19010    cars 
   TABLE DATA           u   COPY public.cars (id, "startPlace", number, "endPlace", "trunkVolume", status, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    219   ~       o          0    19059 
   categories 
   TABLE DATA           H   COPY public.categories (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    227   �       m          0    19050    consolidations 
   TABLE DATA           g   COPY public.consolidations (id, "endPlace", status, "startDate", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    225   8�       y          0    19125    orderConsolidations 
   TABLE DATA           k   COPY public."orderConsolidations" (id, "consolidationId", "orderId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    237   U�       u          0    19092    orders 
   TABLE DATA           �   COPY public.orders (id, name, supply, price, quantity, "endPlace", "startDate", "createdAt", "updatedAt", "userId", "productId") FROM stdin;
    public          postgres    false    233   r�       i          0    19019    packageCars 
   TABLE DATA           [   COPY public."packageCars" (id, "carId", "packageId", "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    221   ��       e          0    18996    packages 
   TABLE DATA           �   COPY public.packages (id, "startPlace", "endPlace", weight, length, width, status, "createdAt", "updatedAt", "userId") FROM stdin;
    public          postgres    false    217   ��       s          0    19073    products 
   TABLE DATA           n   COPY public.products (id, name, price, img, "createdAt", "updatedAt", "categoryId", "providerId") FROM stdin;
    public          postgres    false    231   ܁       q          0    19066 	   providers 
   TABLE DATA           O   COPY public.providers (id, name, rating, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    229   ��       c          0    18984    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �       k          0    19038    waybills 
   TABLE DATA           f   COPY public.waybills (id, date, status, number, "createdAt", "updatedAt", "packageCarId") FROM stdin;
    public          postgres    false    223   �       �           0    0    advice_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.advice_id_seq', 1, true);
          public          postgres    false    234            �           0    0    cars_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.cars_id_seq', 2, true);
          public          postgres    false    218            �           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 1, false);
          public          postgres    false    226            �           0    0    consolidations_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.consolidations_id_seq', 1, false);
          public          postgres    false    224            �           0    0    orderConsolidations_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public."orderConsolidations_id_seq"', 1, false);
          public          postgres    false    236            �           0    0    orders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.orders_id_seq', 1, false);
          public          postgres    false    232            �           0    0    packageCars_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."packageCars_id_seq"', 4, true);
          public          postgres    false    220            �           0    0    packages_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.packages_id_seq', 5, true);
          public          postgres    false    216            �           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 1, false);
          public          postgres    false    230            �           0    0    providers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.providers_id_seq', 1, false);
          public          postgres    false    228            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    214            �           0    0    waybills_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.waybills_id_seq', 4, true);
          public          postgres    false    222            �           2606    19118    advice advice_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.advice
    ADD CONSTRAINT advice_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.advice DROP CONSTRAINT advice_pkey;
       public            postgres    false    235            �           2606    19017    cars cars_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.cars DROP CONSTRAINT cars_pkey;
       public            postgres    false    219            �           2606    19064    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    227            �           2606    19057 "   consolidations consolidations_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.consolidations
    ADD CONSTRAINT consolidations_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.consolidations DROP CONSTRAINT consolidations_pkey;
       public            postgres    false    225            �           2606    19132 C   orderConsolidations orderConsolidations_consolidationId_orderId_key 
   CONSTRAINT     �   ALTER TABLE ONLY public."orderConsolidations"
    ADD CONSTRAINT "orderConsolidations_consolidationId_orderId_key" UNIQUE ("consolidationId", "orderId");
 q   ALTER TABLE ONLY public."orderConsolidations" DROP CONSTRAINT "orderConsolidations_consolidationId_orderId_key";
       public            postgres    false    237    237            �           2606    19130 ,   orderConsolidations orderConsolidations_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public."orderConsolidations"
    ADD CONSTRAINT "orderConsolidations_pkey" PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public."orderConsolidations" DROP CONSTRAINT "orderConsolidations_pkey";
       public            postgres    false    237            �           2606    19099    orders orders_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    233            �           2606    19026 +   packageCars packageCars_carId_packageId_key 
   CONSTRAINT     z   ALTER TABLE ONLY public."packageCars"
    ADD CONSTRAINT "packageCars_carId_packageId_key" UNIQUE ("carId", "packageId");
 Y   ALTER TABLE ONLY public."packageCars" DROP CONSTRAINT "packageCars_carId_packageId_key";
       public            postgres    false    221    221            �           2606    19024    packageCars packageCars_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public."packageCars"
    ADD CONSTRAINT "packageCars_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."packageCars" DROP CONSTRAINT "packageCars_pkey";
       public            postgres    false    221            �           2606    19003    packages packages_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.packages DROP CONSTRAINT packages_pkey;
       public            postgres    false    217            �           2606    19080    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    231            �           2606    19071    providers providers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.providers
    ADD CONSTRAINT providers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.providers DROP CONSTRAINT providers_pkey;
       public            postgres    false    229            �           2606    19147    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            �           2606    19149    users users_email_key1 
   CONSTRAINT     R   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key1 UNIQUE (email);
 @   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key1;
       public            postgres    false    215            �           2606    18992    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �           2606    19043    waybills waybills_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.waybills
    ADD CONSTRAINT waybills_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.waybills DROP CONSTRAINT waybills_pkey;
       public            postgres    false    223            �           2606    19192    advice advice_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.advice
    ADD CONSTRAINT "advice_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 E   ALTER TABLE ONLY public.advice DROP CONSTRAINT "advice_userId_fkey";
       public          postgres    false    215    3246    235            �           2606    19197 <   orderConsolidations orderConsolidations_consolidationId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."orderConsolidations"
    ADD CONSTRAINT "orderConsolidations_consolidationId_fkey" FOREIGN KEY ("consolidationId") REFERENCES public.consolidations(id) ON UPDATE CASCADE ON DELETE CASCADE;
 j   ALTER TABLE ONLY public."orderConsolidations" DROP CONSTRAINT "orderConsolidations_consolidationId_fkey";
       public          postgres    false    3258    237    225            �           2606    19202 4   orderConsolidations orderConsolidations_orderId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."orderConsolidations"
    ADD CONSTRAINT "orderConsolidations_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public.orders(id) ON UPDATE CASCADE ON DELETE CASCADE;
 b   ALTER TABLE ONLY public."orderConsolidations" DROP CONSTRAINT "orderConsolidations_orderId_fkey";
       public          postgres    false    233    3266    237            �           2606    19187    orders orders_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 H   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_productId_fkey";
       public          postgres    false    3264    231    233            �           2606    19182    orders orders_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 E   ALTER TABLE ONLY public.orders DROP CONSTRAINT "orders_userId_fkey";
       public          postgres    false    233    215    3246            �           2606    19157 "   packageCars packageCars_carId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."packageCars"
    ADD CONSTRAINT "packageCars_carId_fkey" FOREIGN KEY ("carId") REFERENCES public.cars(id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public."packageCars" DROP CONSTRAINT "packageCars_carId_fkey";
       public          postgres    false    219    221    3250            �           2606    19162 &   packageCars packageCars_packageId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."packageCars"
    ADD CONSTRAINT "packageCars_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES public.packages(id) ON UPDATE CASCADE ON DELETE CASCADE;
 T   ALTER TABLE ONLY public."packageCars" DROP CONSTRAINT "packageCars_packageId_fkey";
       public          postgres    false    217    221    3248            �           2606    19152    packages packages_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.packages
    ADD CONSTRAINT "packages_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.packages DROP CONSTRAINT "packages_userId_fkey";
       public          postgres    false    217    3246    215            �           2606    19172 !   products products_categoryId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_categoryId_fkey";
       public          postgres    false    231    227    3260            �           2606    19177 !   products products_providerId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES public.providers(id) ON UPDATE CASCADE ON DELETE SET NULL;
 M   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_providerId_fkey";
       public          postgres    false    229    3262    231            �           2606    19167 #   waybills waybills_packageCarId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.waybills
    ADD CONSTRAINT "waybills_packageCarId_fkey" FOREIGN KEY ("packageCarId") REFERENCES public."packageCars"(id) ON UPDATE CASCADE ON DELETE SET NULL;
 O   ALTER TABLE ONLY public.waybills DROP CONSTRAINT "waybills_packageCarId_fkey";
       public          postgres    false    3254    223    221            w   �   x�3�0�¦.�3.컰��$���!713G����¢[/6^l� �V���@j߅�;/lj���O��.��^����/� �o�����id`d�k`�k`�`dde`leh�gl`�m`�W�+F��� -:K�      g   �   x�3�0��֋��.�S��H���paÅMv_�za��.칰�bǅ�^�V0��Cѳ�z;��؎K������������������������������1).#RhD��8����L�����R\1z\\\ ��u      o      x������ � �      m      x������ � �      y      x������ � �      u      x������ � �      i   Y   x�}�A� D�5s
�������!.4&4f�o�%��ҳZֲ�C�(U�ڮ���]�=n�Ĵڰ.�G�~>[_�hcؾ�S \]+�      e   �   x����i1�󨊽��]i����H!`vZu�{Ib�]��̇x����R~�Z����o��_~����`f.5�hw9��H�2#�i�20Ϙf�1��	�ah��V%�`w뤭KfIn�� �U	�5I=����Q�/1���E"$�*�*�۟t$�"i�K,�H�D7HtU�0�*t_����I�LQyZ$�B��$�      s      x������ � �      q      x������ � �      c   �   x�}ν��@@�z�),��;� �]B\�
�؀?��f�����c���$�9�s�]Y����҈�6i��G+Yǘ��<�9z�2۴[�>��j'�1Y/�e�m�ɇB���A���� ��2|�QN���V����-��[�"O6Y�=���}V6~*�������K���S�(�,?|�q[r6�֋��F)��GH[      k   z   x���I
�0D���p�����xq�{��7Inԓ��6
�{E=��@��4�<�.�y�s��T��t���I�)Dk>�?�I.�x&�
~�6����M�1�H�.v��xn�"���րd     