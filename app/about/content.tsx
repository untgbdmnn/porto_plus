import { useTranslations } from "next-intl";

export function AboutMe() {
    const t = useTranslations("About-Page");
    return (
        <div className="h-[350px] lg:h-52">
            <div className="text-sm font-normal flex flex-col gap-2.5">
                <p className="">{t('description.aboutme')}</p>
                <p>{t('description.currentwork')}</p>
            </div>
        </div>
    )
}

export function Educate() {
    const t = useTranslations("About-Page");
    return (
        <div className="h-[350px] lg:h-52">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 hidden lg:block flex-none bg-foreground rounded-full border-4 border-third" />
                <div className="flex items-start justify-start flex-col">
                    <h1 className="text-foreground font-black text-lg">SMK N 2 Pengasih, Kulon Progo</h1>
                    <p className="text-sm">{t('description.tjkt')} | 2021 - 2024</p>
                </div>
            </div>
            <div className="pt-3 lg:px-7 px-0">
                <p className="text-sm">{t('description.educatedesc')}</p>
            </div>
        </div>
    )
}

export function Experience() {
    const t = useTranslations("About-Page");
    return (
        <div className="h-[350px] lg:h-52">
            <div className="flex items-center gap-2">
                <div className="w-5 h-5 hidden lg:block flex-none bg-foreground rounded-full border-4 border-third" />
                <div className="flex items-start justify-start flex-col">
                    <h1 className="text-foreground font-black text-lg">PT Belanja Pasti Indonesia</h1>
                    <p className="text-sm">{t('description.webdev')} | 2024 - {t('sekarang')}</p>
                </div>
            </div>
            <div className="pt-3 lg:px-7 px-0">
                <p className="text-sm">{t('description.webdevdesc')}</p>
            </div>
        </div>
    )
}
