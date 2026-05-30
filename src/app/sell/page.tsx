"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { sellCategories, brandsByCategory, modelsByBrand, deviceQuestions } from "@/lib/mock-data";
import { useAppStore } from "@/store/app-store";
import { cn } from "@/lib/utils";

// Category Selection Step
function CategoryStep({ onSelect }: { onSelect: (category: string) => void }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#3478F6] mb-2 block">
          Step 1 of 4
        </span>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#1D1D1F] mb-3">
          What do you want to sell?
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Select the category of device you want to sell. We accept phones, laptops, tablets, and more.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {sellCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border-2 border-border hover:border-[#3478F6] hover:shadow-lg transition-all duration-200"
          >
            <div className="w-16 h-16 relative">
              <Image
                src={category.icon}
                alt={category.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="text-center">
              <span className="font-semibold text-sm text-[#1D1D1F]">{category.name}</span>
              {category.popular && (
                <span className="block text-[10px] text-[#3478F6] font-medium mt-1">Popular</span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Brand Selection Step
function BrandStep({ category, onSelect, onBack }: { category: string; onSelect: (brand: string) => void; onBack: () => void }) {
  const brands = brandsByCategory[category] || [];
  const categoryName = sellCategories.find(c => c.id === category)?.name || category;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#3478F6] mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to categories
      </button>

      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#3478F6] mb-2 block">
          Step 2 of 4
        </span>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#1D1D1F] mb-3">
          Select your brand
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Choose the brand of your {categoryName.toLowerCase()} to get the best price quote.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {brands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => onSelect(brand.id)}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border-2 border-border hover:border-[#3478F6] hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-sm text-[#1D1D1F]">{brand.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// Model Selection Step
function ModelStep({ category, brand, onSelect, onBack }: { category: string; brand: string; onSelect: (model: string, storage: string) => void; onBack: () => void }) {
  const [selectedStorage, setSelectedStorage] = useState<Record<string, string>>({});
  const brandName = brandsByCategory[category]?.find(b => b.id === brand)?.name || brand;
  const models = modelsByBrand[`${brand}-${category}`] || modelsByBrand[`${brand}-mobile`] || [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#3478F6] mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to brands
      </button>

      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#3478F6] mb-2 block">
          Step 3 of 4
        </span>
        <h1 className="font-[family-name:var(--font-display)] font-bold text-3xl md:text-4xl text-[#1D1D1F] mb-3">
          Select your {brandName} model
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Choose your model and storage variant to calculate the exact price.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((model) => (
          <div key={model.id} className="bg-white rounded-2xl border-2 border-border p-5 hover:border-[#3478F6] transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-20 h-24 relative bg-gradient-to-b from-slate-50 to-slate-100 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#1D1D1F]">{model.name}</h3>
                <p className="text-sm text-[#3478F6] font-bold mt-1">
                  Up to ₹{model.basePrice.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-xs font-medium text-muted-foreground mb-2 block">Select Storage</label>
              <div className="flex flex-wrap gap-2">
                {model.storage.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => setSelectedStorage({ ...selectedStorage, [model.id]: storage })}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors",
                      selectedStorage[model.id] === storage
                        ? "bg-[#3478F6] text-white"
                        : "bg-[#F5F5F7] text-[#6E6E73] hover:bg-[rgba(52,120,246,0.08)]"
                    )}
                  >
                    {storage}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => onSelect(model.id, selectedStorage[model.id] || model.storage[0])}
              disabled={!selectedStorage[model.id]}
              className="w-full py-2.5 bg-[#3478F6] text-white rounded-xl font-medium hover:bg-[#1D5FD8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Select Model
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Question Flow Step with Live Price
function QuestionStep({ modelData, onComplete, onBack }: { modelData: { category: string; brand: string; model: string; storage: string; basePrice: number }; onComplete: (answers: Record<string, string>, finalPrice: number, deductions: Array<{ reason: string; amount: number }>) => void; onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  const calculatePrice = () => {
    let price = modelData.basePrice;
    const deductions: Array<{ reason: string; amount: number }> = [];

    // Apply deductions based on answers
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = deviceQuestions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.id === answerId);
      if (option && option.deduction > 0) {
        const deductionAmount = Math.round((price * option.deduction) / 100);
        deductions.push({ reason: option.label, amount: deductionAmount });
        price -= deductionAmount;
      }
    });

    return { finalPrice: Math.max(price, 0), deductions };
  };

  const handleAnswer = (answerId: string) => {
    const newAnswers = { ...answers, [deviceQuestions[currentQuestion].id]: answerId };
    setAnswers(newAnswers);

    if (currentQuestion < deviceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
      const { finalPrice, deductions } = calculatePrice();
      onComplete(newAnswers, finalPrice, deductions);
    }
  };

  const progress = ((currentQuestion + (completed ? 1 : 0)) / deviceQuestions.length) * 100;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#3478F6] mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to models
      </button>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left: Questions */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#3478F6] mb-2 block">
              Step 4 of 4 - Question {completed ? deviceQuestions.length : currentQuestion + 1} of {deviceQuestions.length}
            </span>
            <div className="h-2 bg-[#F5F5F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3478F6] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!completed ? (
            <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8">
              <h2 className="font-[family-name:var(--font-display)] font-bold text-xl md:text-2xl text-[#1D1D1F] mb-6">
                {deviceQuestions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {deviceQuestions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer(option.id)}
                    className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-border hover:border-[#3478F6] hover:bg-[#FBFBFD] transition-all text-left group"
                  >
                    <span className="font-medium text-[#1D1D1F]">{option.label}</span>
                    {option.deduction > 0 && (
                      <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">
                        -{option.deduction}%
                      </span>
                    )}
                    {option.deduction === 0 && (
                      <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded">
                        No deduction
                      </span>
                    )}
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[#3478F6]" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border-2 border-border p-6 md:p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] font-bold text-2xl text-[#1D1D1F] mb-2">
                Assessment Complete!
              </h2>
              <p className="text-muted-foreground mb-6">
                Based on your answers, we&apos;ve calculated the best price for your device.
              </p>
              <Link
                href="/sell/book"
                className="inline-flex items-center gap-2 bg-[#0071E3] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#1D5FD8] transition-colors"
              >
                Continue to Booking <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>

        {/* Right: Price Summary */}
        <div className="lg:col-span-2">
          <div className="sticky top-24 bg-gradient-to-br from-[#0F044A] to-[#1a0d5c] rounded-2xl p-6 text-white">
            <h3 className="text-sm font-medium text-white/60 mb-4">Price Summary</h3>

            <div className="mb-4">
              <p className="text-xs text-white/50">{modelData.brand} {modelData.model}</p>
              <p className="text-xs text-white/50">{modelData.storage}</p>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Base Price</span>
                <span>₹{modelData.basePrice.toLocaleString()}</span>
              </div>
              {calculatePrice().deductions.map((d, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-white/50 text-xs">{d.reason}</span>
                  <span className="text-amber-400">-₹{d.amount.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/20 pt-4 mb-4">
              <div className="flex justify-between items-end">
                <span className="text-sm text-white/70">Final Price</span>
                <span className="font-[family-name:var(--font-display)] font-bold text-3xl text-[#3478F6]">
                  ₹{calculatePrice().finalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/50">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
              <span>Best price guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Sell Page
export default function SellPage() {
  const [step, setStep] = useState<"category" | "brand" | "model" | "questions">("category");
  const [selection, setSelection] = useState({
    category: "",
    brand: "",
    model: "",
    storage: "",
    basePrice: 0,
  });
  const { setSellCategory, setSellBrand, setSellModel, setFinalPrice, resetSellFlow } = useAppStore();

  const handleCategorySelect = (category: string) => {
    setSelection({ ...selection, category });
    setSellCategory(category);
    setStep("brand");
  };

  const handleBrandSelect = (brand: string) => {
    setSelection({ ...selection, brand });
    setSellBrand(brand);
    setStep("model");
  };

  const handleModelSelect = (model: string, storage: string) => {
    const models = modelsByBrand[`${selection.brand}-${selection.category}`] || modelsByBrand[`${selection.brand}-mobile`] || [];
    const modelData = models.find(m => m.id === model);
    const newSelection = { ...selection, model, storage, basePrice: modelData?.basePrice || 0 };
    setSelection(newSelection);
    setSellModel(model);
    setStep("questions");
  };

  const handleQuestionComplete = (answers: Record<string, string>, finalPrice: number, deductions: Array<{ reason: string; amount: number }>) => {
    Object.entries(answers).forEach(([qId, answer]) => {
      useAppStore.getState().setQuestionAnswer(qId, answer);
    });
    setFinalPrice(finalPrice, deductions);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7]">
      <Navbar />
      <main className="flex-1">
        {step === "category" && <CategoryStep onSelect={handleCategorySelect} />}
        {step === "brand" && (
          <BrandStep
            category={selection.category}
            onSelect={handleBrandSelect}
            onBack={() => setStep("category")}
          />
        )}
        {step === "model" && (
          <ModelStep
            category={selection.category}
            brand={selection.brand}
            onSelect={handleModelSelect}
            onBack={() => setStep("brand")}
          />
        )}
        {step === "questions" && (
          <QuestionStep
            modelData={selection}
            onComplete={handleQuestionComplete}
            onBack={() => setStep("model")}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
