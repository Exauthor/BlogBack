import { IsString, Length, IsDate, IsInt, Min, Max } from 'class-validator';

export class CreateArticleDto {
    @IsString()
    readonly title: string;

    @Length(10, 500)
    @IsString()
    readonly description: string;

    @IsString()
    readonly body: string;
    
    @IsInt()
    @Min(1)
    @Max(10)
    readonly complexity: number;

    @IsString()
    readonly headerImage: string;
    
    @IsString()
    readonly articleImage: string;
    
    readonly themes: string[];

    readonly size: number[];
    
    @IsString()
    readonly archive: boolean;

    // @IsDate()
    // createDate: Date;
}